from django.contrib.auth import login, authenticate
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import render, redirect
from recommendation_system.forms import SignUpForm
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.template.loader import render_to_string
from recommendation_system.forms import SignUpForm
from recommendation_system.tokens import account_activation_token
from django.contrib.auth.models import User
from django.utils.encoding import force_text
from django.utils.http import urlsafe_base64_decode
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib import messages
import nltk
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer


def index(request):
    return render(request, 'index.html', {})

def account_activation_sent(request):
    return render(request, 'accounts/account_activation_sent.html')

@login_required
def dashboard(request):
    context = {}
    if request.method == 'POST':
        form_data = request.POST.copy()
        study_area = form_data.get('study_area')
        study_area2 = str.lower(study_area)
        token1 = nltk.word_tokenize(study_area2)

        stopword = []
        stop_words = set(stopwords.words('english'))
        for line in stop_words:
            stopword.append(line)
        
        token = []
        for word in token1:
            if word not in stopword:
                token.append(word)

        def get_lemma(word):
            return WordNetLemmatizer().lemmatize(word)

        context.update({'token': token})
    return render(request, 'recommendation_system/dashboard.html', context)

@login_required
def profile(request):
    return render(request, 'accounts/profile.html')

@login_required
def recommendations(request):
    return render(request, 'recommendation_system/recommendations.html')

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.profile.email_confirmed = True
        user.save()
        login(request, user)
        return redirect('profile')
    else:
        return render(request, 'accounts/account_activation_invalid.html')


def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = True
            user.save()
            messages.add_message(request, messages.SUCCESS, 'User successfully created')
            current_site = get_current_site(request)
            subject = 'Activate Your Account'
            message = render_to_string('accounts/account_activation_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid':  force_text(urlsafe_base64_encode(force_bytes(user.pk))),
                'token': account_activation_token.make_token(user),
            })
            user.email_user(subject, message)
            login(request, user)
            return redirect('dashboard')
    else:
        form = SignUpForm()
    return render(request, 'accounts/signup.html', {'form': form})
