FROM python:3.9.4

RUN pip3 install flask

RUN pip3 install Flask-SQLAlchemy

RUN pip3 install flask-cors

WORKDIR /db

COPY . .

ENV FLASK_APP api

CMD [ "flask", "run"]