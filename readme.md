# SAMPLE MICROSERVICE
This is the title of 

## Installation:

**1. Clone this repo by running the following command :**

```bash
 git clone https://github.com/ngtsnn/sample_microservice.git
 cd sample_microservice
```

**2. Now install all the required packages for RS by running the following commands :**

***2.1. If you prefer installing packages globally :***
```
 cd RS
 pip3 install requirements.txt
 cd..
```

***2.2. If you prefer installing packages locally (via virtualenv) :***
```
 cd RS
 virtualenv packages
 source packages/bin/activate
 pip3 install requirements.txt
 deactivate
 cd ..
```

**3. Now install all the required packages for RS by running the following commands :**

***3.1. If you prefer installing packages via npm :***
```
 cd web
 npm -i
 cd..
```

***3.2. If you prefer installing packages via yarn :***
```
 cd RS
 virtualenv packages
 source packages/bin/activate
 pip3 install requirements.txt

```


**4. Now start the RS by running the following command :-**

```
 cd RS
 source packages/bin/activate (in case you use virtualenv)
 uvicorn main:app
```

**5.** **🎉 Open your browser and go to `http://127.0.0.1:8000`**

**6. Now open new terminal and start the web server by running the following command :-**

```
 cd web
 npm start
 #or
 yarn start
```

**7.** **🎉 Open your browser and go to `http://127.0.0.1:8080`**

**8. If you prefer running in docker:-**
```
docker-compose up
```
