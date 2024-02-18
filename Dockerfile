FROM python:3.10-alpine
WORKDIR /code
COPY requirements.txt /code
RUN pip install -r requirements.txt --no-cache-dir
COPY . /code
ENV MONGO_DB_URI="mongodb://mongodb:27017/mydatabase"
CMD python app.py