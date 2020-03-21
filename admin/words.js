﻿/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "DasWetter.com_adapter_settings":
        {
            "en": "DasWetter.com adapter settings",
            "de": "DasWetter.com Adapter Einstellungen",
            "ru": "Настройки адаптера DasWetter.com",
            "pt": "Configurações do adaptador DasWetter.com",
            "nl": "DasWetter.com adapterinstellingen",
            "fr": "Paramètres de l'adaptateur DasWetter.com",
            "it": "Impostazioni della scheda DasWetter.com",
            "es": "Configuración del adaptador DasWetter.com",
            "pl": "Ustawienia adaptera DasWetter.com"
        },
    "URL_5_days_forecast": {
        "en": "path 2: XML-file with 5-days-weather forecast and detailled informationen for every 3 hours",
        "de": "Pfad 2: XML-Datei mit 5-Tage-Wettervorhersage und detaillierten Informationen für alle 3 Stunden",
        "ru": "путь 2: XML-файл с прогнозом погоды на 5 дней и подробной информацией за каждые 3 часа",
        "pt": "caminho 2: arquivo XML com previsão de 5 dias e informações detalhadas para cada 3 horas",
        "nl": "pad 2: XML-bestand met 5-daagse weersvoorspelling en gedetailleerde informatie voor elke 3 uur",
        "fr": "chemin 2: fichier XML avec prévisions météo à 5 jours et informations détaillées toutes les 3 heures",
        "it": "percorso 2: file XML con previsioni meteo a 5 giorni e informazioni dettagliate ogni 3 ore",
        "es": "ruta 2: archivo XML con pronóstico del tiempo para 5 días e información detallada por cada 3 horas",
        "pl": "ścieżka 2: plik XML z 5-dniową prognozą pogody i szczegółowymi informacjami co 3 godziny"
    },
    "URL_7_days_forecast": {
        "en": "path 1: XML-file with 7-days-weather forecast and general day overview",
        "de": "Pfad 1: XML-Datei mit 7-Tage-Wettervorhersage und Tagesübersicht",
        "ru": "путь 1: XML-файл с прогнозом погоды на 7 дней и общим дневным обзором",
        "pt": "caminho 1: arquivo XML com previsão de tempo de 7 dias e visão geral geral do dia",
        "nl": "pad 1: XML-bestand met 7-daagse weersvoorspelling en algemeen dagoverzicht",
        "fr": "chemin 1: fichier XML avec prévisions météo à 7 jours et aperçu général des jours",
        "it": "percorso 1: file XML con previsioni meteo a 7 giorni e panoramica generale",
        "es": "ruta 1: archivo XML con pronóstico del tiempo para 7 días y descripción general del día",
        "pl": "ścieżka 1: plik XML z 7-dniową prognozą pogody i ogólnym widokiem dnia"
    },
    "URL_hourly_forecast": {
        "en": "path 3: XML-file with weather forecast for next 5 days and hourly information ",
        "de": "Pfad 3: XML-Datei mit Wettervorhersage für die nächsten 5 Tage und stündliche Informationen",
        "ru": "путь 3: XML-файл с прогнозом погоды на ближайшие 5 дней и почасовой информацией",
        "pt": "caminho 3: arquivo XML com previsão do tempo para os próximos 5 dias e informações por hora",
        "nl": "pad 3: XML-bestand met weersvoorspelling voor de komende 5 dagen en informatie per uur",
        "fr": "chemin 3: fichier XML avec prévisions météo pour les 5 prochains jours et informations horaires",
        "it": "percorso 3: file XML con previsioni meteo per i prossimi 5 giorni e informazioni orarie",
        "es": "ruta 3: archivo XML con pronóstico del tiempo para los próximos 5 días e información por hora",
        "pl": "ścieżka 3: plik XML z prognozą pogody na następne 5 dni i godzinę"
    },
    "URL_hourly_forecast_JSON": {
        "en": "path 4: JSON-file with weather forecast for next 5 days and hourly information ",
        "de": "Pfad 4: JSON-Datei mit Wettervorhersage für die nächsten 5 Tage und stündliche Informationen",
        "ru": "путь 4: JSON-файл с прогнозом погоды на ближайшие 5 дней и почасовой информацией",
        "pt": "caminho 4: arquivo JSON com previsão do tempo para os próximos 5 dias e informações por hora",
        "nl": "pad 4: JSON-bestand met weersvoorspelling voor de komende 5 dagen en informatie per uur",
        "fr": "chemin 4: fichier JSON avec prévisions météo pour les 5 prochains jours et informations horaires",
        "it": "percorso 4: file JSON con previsioni meteo per i prossimi 5 giorni e informazioni orarie",
        "es": "ruta 4: archivo JSON con pronóstico del tiempo para los próximos 5 días e información por hora",
        "pl": "ścieżka 4: plik JSON z prognozą pogody na następne 5 dni i godzinę"
    },

    "use_only_the_URL_you_need": {
        "en": "Use only the URL you need, leave the others blank. Use arbitrary minutes in cron settings because the API server does respond late on exact hours, half hours and so on. (server overload problem).",
        "de": "Verwenden Sie nur die URL, die Sie benötigen, lassen Sie die anderen leer. Verwenden Sie beliebige Minuten in Cron-Einstellungen, da der API-Server spät auf genaue Stunden, halbe Stunden usw. reagiert. (Server-Überlastungsproblem).",
        "ru": "Используйте только URL-адрес, который вам нужен, оставьте остальные пустыми. Используйте произвольные минуты в настройках cron, потому что сервер API отвечает поздно на точные часы, полчаса и так далее. (проблема перегрузки сервера).",
        "pt": "Use apenas o URL que você precisa, deixe os outros em branco. Use minutos arbitrários nas configurações do cron porque o servidor da API responde atrasado em horas exatas, meia hora e assim por diante. (problema de sobrecarga do servidor).",
        "nl": "Gebruik alleen de URL die u nodig heeft, laat de anderen leeg. Gebruik willekeurige minuten in cron-instellingen, want de API-server reageert laat op exacte uren, een half uur enzovoort. (probleem met serveroverbelasting).",
        "fr": "Utilisez uniquement l'URL dont vous avez besoin, laissez les autres vides. Utilisez des minutes arbitraires dans les paramètres cron car le serveur d'API répond en retard à des heures précises, des demi-heures, etc. (problème de surcharge du serveur).",
        "it": "Usa solo l'URL di cui hai bisogno, lascia gli altri vuoti. Utilizza minuti arbitrari nelle impostazioni di cron perché il server API risponde in ritardo su ore esatte, mezz'ora e così via. (problema di sovraccarico del server).",
        "es": "Use solo la URL que necesita, deje los otros en blanco. Use minutos arbitrarios en la configuración de cron porque el servidor API responde tarde en horas exactas, medias horas, etc. (problema de sobrecarga del servidor).",
        "pl": "Użyj tylko potrzebnego adresu URL, pozostałe pozostałe pozostaw puste. Użyj arbitralnych minut w ustawieniach cron, ponieważ serwer API reaguje późno na dokładne godziny, pół godziny i tak dalej. (problem z przeciążeniem serwera)."
    },

    
    "Icons": {
        "en": "Icons",
        "de": "Symbole",
        "ru": "Иконки",
        "pt": "Ícones",
        "nl": "Icons",
        "fr": "Icônes",
        "it": "Icone",
        "es": "Iconos",
        "pl": "Ikony"
    },
    "Icon set": {
        "en": "Icon set",
        "de": "Icon-Set",
        "ru": "Набор значков",
        "pt": "Conjunto de ícones",
        "nl": "Icon set",
        "fr": "Jeu d'icônes",
        "it": "Set di icone",
        "es": "Conjunto de iconos",
        "pl": "Zestaw ikon"
    },
    "parse_timeout": {
        "en": "download and parse timeout [seconds]",
        "de": "Zeitlimit für Herunterladen und Parsen [Sekunden]",
        "ru": "скачать и разобрать таймаут [секунды]",
        "pt": "baixar e analisar o tempo limite [segundos]",
        "nl": "time-out voor downloaden en parseren [seconden]",
        "fr": "télécharger et analyser le délai d'attente [secondes]",
        "it": "scarica e analizza il timeout [secondi]",
        "es": "descargar y analizar el tiempo de espera [segundos]",
        "pl": "pobierz i przeanalizuj limit czasu [sekundy]"
    },
    
    "use_png_or_svg": {
        "en": "use PNG instead of SVG",
        "de": "PNG anstelle von SVG verwenden",
        "ru": "используйте PNG вместо SVG",
        "pt": "usar PNG em vez de SVG",
        "nl": "gebruik PNG in plaats van SVG",
        "fr": "utilisez PNG au lieu de SVG",
        "it": "usa PNG invece di SVG",
        "es": "usa PNG en lugar de SVG",
        "pl": "użyj PNG zamiast SVG"
    },
    "use_color_or_bw": {
        "en": "use colored or white symbols",
        "de": "farbige oder weiße Symbole verwenden",
        "ru": "используйте цветные или белые символы",
        "pt": "usar símbolos coloridos ou brancos",
        "nl": "gebruik gekleurde of witte symbolen",
        "fr": "utiliser des symboles colorés ou blancs",
        "it": "utilizzare simboli colorati o bianchi",
        "es": "utilizar símbolos de colores o blancos",
        "pl": "używaj kolorowych lub białych symboli",
        "zh-cn": "使用彩色或白色符号"
    },
    "custom_path_hint": {
        "en": "custom path must be in the form \"/adapter/daswetter/icons/tiempo-weather/galeria4/\". The extension must start with a dot (eg .png)",
        "de": "Der benutzerdefinierte Pfad muss das Format \"/ adapter / daswetter / icons / tiempo-weather / galeria4 /\" haben. Die Erweiterung muss mit einem Punkt beginnen (zB .png)",
        "ru": "Пользовательский путь должен быть в форме \"/ adapter / daswetter / icons / tiempo-weather / galeria4 /\". Расширение должно начинаться с точки (например, .png)",
        "pt": "O caminho personalizado deve estar no formato \"/ adapter / daswetter / icons / tiempo-weather / galeria4 /\". A extensão deve começar com um ponto (por exemplo, .png)",
        "nl": "aangepast pad moet de vorm hebben \"/ adapter / daswetter / icons / tiempo-weather / galeria4 /\". De extensie moet beginnen met een punt (bijv. .Png)",
        "fr": "Le chemin personnalisé doit être sous la forme \"/ adaptateur / daswetter / icônes / tiempo-weather / galeria4 /\". L'extension doit commencer par un point (par exemple .png)",
        "it": "il percorso personalizzato deve essere nel formato \"/ adapter / daswetter / icons / tiempo-weather / galeria4 /\". L'estensione deve iniziare con un punto (ad esempio .png)",
        "es": "la ruta personalizada debe estar en la forma \"/ adapter / daswetter / icons / tiempo-weather / galeria4 /\". La extensión debe comenzar con un punto (por ejemplo, .png)",
        "pl": "niestandardowa ścieżka musi być w postaci „/ adapter / daswetter / icons / tiempo-weather / galeria4 /”. Rozszerzenie musi zaczynać się kropką (np. .Png)",
        "zh-cn": "自定义路径必须采用“/ adapter / daswetter / icons / tiempo-weather / galeria4 /”形式。扩展名必须以点开头（例如.png）"
    },
    "custom_path": {
        "en": "customized path",
        "de": "angepasster Pfad",
        "ru": "индивидуальный путь",
        "pt": "caminho personalizado",
        "nl": "aangepast pad",
        "fr": "chemin personnalisé",
        "it": "percorso personalizzato",
        "es": "camino personalizado",
        "pl": "niestandardowa ścieżka",
        "zh-cn": "定制路径"
    },
    "custom_path_ext": {
        "en": "customized file name extension",
        "de": "Angepasste Dateinamenerweiterung",
        "ru": "индивидуальное расширение имени файла",
        "pt": "extensão de nome de arquivo personalizada",
        "nl": "aangepaste bestandsnaamextensie",
        "fr": "extension de nom de fichier personnalisée",
        "it": "estensione del nome file personalizzata",
        "es": "extensión de nombre de archivo personalizada",
        "pl": "niestandardowe rozszerzenie nazwy pliku",
        "zh-cn": "自定义文件扩展名"
    }

};