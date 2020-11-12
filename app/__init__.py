import os
from flask import Flask, render_template, request, session, jsonify
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

from app.models import db, User, Photo, Album
from app.api.api import user_routes, feed_routes, upload_routes
from app.config import Config




app = Flask(__name__, static_url_path='')

app.config.from_object(Config)
# app.register_blueprint(forum_routes, url_prefix='/api/forums')
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(upload_routes, url_prefix='/api/uploads')
app.register_blueprint(feed_routes, url_prefix='/api/feeds')
db.init_app(app)
jwt = JWTManager(app)
Migrate(app, db, compare_type=True)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['FLASKS3_BUCKET_NAME'] = 'jiutube'

# Application Security

CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'