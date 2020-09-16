from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def pulzip():
    return render_template('pulzip_romeo.html')

# @app.route('/logging')
# def logging_test():
#     test =1
#     app.logger.debug('디버깅 필요')
#     app.logger.warning(str(test)+'라인')
#     app.logger.error('에러발생')
#     return '로깅'

if __name__=='__main__':
    app.run()