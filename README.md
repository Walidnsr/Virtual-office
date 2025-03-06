# Virtual Office Setup Guide

## 1. Create and Activate a Virtual Environment
To ensure a clean working environment, create and activate a virtual environment:

```sh
python -m venv venv
source venv/Scripts/activate
```

## 2. Install Dependencies
Once the virtual environment is activated, install the necessary dependencies:

```sh
pip install django cohere requests Pillow
```

## 3. Apply Migrations
Run the following commands to set up the database:

```sh
python manage.py migrate
python manage.py createdemo
```

## 4. Start the Server
Launch the development server using:

```sh
python manage.py runserver
```

Once started, open your browser and navigate to:

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## 5. Default User Credentials
Use the following credentials to log in:

- **Username:** Demo
- **Password:** Azerty1234

