from flask import Blueprint, jsonify, request
from app.models import db, User
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import bcrypt
import re

bp = Blueprint('uploads', __name__, '')

#todo 
#make routes for getting albums
#make routes for putting post requests to albums