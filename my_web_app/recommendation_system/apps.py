from django.apps import AppConfig
from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class RecommendationSystemConfig(AppConfig):
    name = 'recommendation_system'


class ProfilesConfig(RecommendationSystemConfig):
    def ready(self):
        import recommendation_system.signals
