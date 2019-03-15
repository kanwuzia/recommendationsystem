import nltk
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer

def get_lemma(word):
    return WordNetLemmatizer().lemmatize(word)


stop_words = set(stopwords.words('english'))
def prepare_text_for_tfidf(text):
    
    tokens = nltk.word_tokenize(text)
    tokens = [token for token in tokens if len(token) > 4]
    tokens = [token for token in tokens if token not in stop_words]
    tokens = [get_lemma(token) for token in tokens]
    return tokens

text_data = []
with open('C:\\Users\\acer\\Desktop\\MISTRA.csv') as f:
    for line in f:
        tokens = prepare_text_for_tfidf(line)
        print(tokens)
        text_data.append(tokens)
        
print(text_data)



