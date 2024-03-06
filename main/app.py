from flask import Flask, render_template

def create_app(test_config=None, db_name=""):
   # create and configure the app
   app = Flask(__name__, template_folder='templates/')

   # Setup the home route endpoint
   @app.route("/home")
   def index():
      return render_template("index.html")

   return app


app: Flask = create_app()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2024, debug=True)