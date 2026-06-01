# Virtual Office
Ce projet est un virtual desktop qui permet de se connecter et d'accéder à son environnement avec plusieurs applications.
Projet réalisé en collaboration avec : Ilyes ACHAQ, Bastien ROBERT, Antoine MOUTIER
## Design & Interface
L'interface utilisateur s'inspire du style **glassmorphism** de macOS, avec des éléments semi-transparents, des arrière-plans floutés et des bordures subtiles. 

## Fonctionnalités
Virtual Office propose plusieurs applications intégrées :

- **📝 Bloc-notes** 
- **🧮 Calculatrice** 
- **📁 Explorateur de fichiers**
- **🎵 Lecteur de musique** 
- **🌤 Application météo** 
- **⏰ Horloge** 
- **💻 Terminal** 
- **📅 Agenda** 
- **🤖 Chatbot** 
- **🎮 Application de jeux** 
- **📽 Lecteur multimédia** 
- **📰 Application de nouvelles** 
- **🖼 Visionneuse de photos** 
- **📈 Application boursière** 


https://github.com/user-attachments/assets/ee0385d2-8f4c-49fe-ac3e-3101999becc4



# Installation
Pour installer et tester le projet, veuillez suivre les étapes suivantes.

```
git clone https://github.com/votre-utilisateur/virtual-office.git    
cd virtual-office
```

## Créer et activer un environnement:

Linux/Mac:
```
python3 -m venv venv

source venv/bin/activate
```

Windows:

```
python -m venv venv

venv\Scripts\activate
```

## Installer les dépendances:

```
pip install django cohere requests Pillow Plotly
```
Appliquer les migrations:

```
python manage.py migrate

python manage.py createdemo
```


# Démarrer le serv:

```
python manage.py runserver
```

Ouvrez http://127.0.0.1:8000/.


User : demo / demo
