# Django 3.1.4 Project Template
## Purpuse
- This is a template project based on the django 3.1.4.
- It also enables 
  - [Django Mix](https://github.com/m-a-k-o/django-mix)
  - and [Vue.js](https://vuejs.org/)


## Prepare the virtual environment
- git clone the project
- create venv
```
virtualenv --python=3 venv
```
- activate the virtual environment
```
source venv/bin/activate
```
- install requirements
```
pip install -r requirements.txt
```

## Initialise the site
- switch to site folder
```
cd site
``` 
- run db migrate
```
./manage.py migrate
```
- create super user
```
./manage.py createsuperuser
```
- run server
```
./manage.py runserver
```
- access mysite, [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- access admin console, [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)

## Front-end dev
- install package
```
npm i
```
- build css and js from assets to site/static
  - watch mode
    ```
    npm run watch
    ```
  - dev build
    ```
    npm run dev
    ```
  - prod build
    ```
    npm run prod
    ```

## Folders
- assets folder contains the raw assets, such as fonts, images, source code of js (including vue components) and scss;
- site folder contains django site source code;
  -  site/app contains the main settings;
  -  site/static contains static assets after compiling;
  -  site/template contains template html;
- venv contains the virtual environment
