from app.models import User, Photo, Album
from app import app, db
from dotenv import load_dotenv
import bcrypt
load_dotenv()
with app.app_context():
  db.drop_all()
  db.create_all()
  