FROM python
COPY . /app
#EXPOSE 5000
WORKDIR /app
RUN pip install PyMySQL
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /
CMD ["python", "app.py"]