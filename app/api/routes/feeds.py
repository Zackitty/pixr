from flask import Blueprint, jsonify, request
from app.models import db, Photo
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import bcrypt
import re

bp = Blueprint('feeds', __name__, '')

@bp.route('')
def index():
  response = Photo.query.all()
  return {photo.id: photo.to_dict() for photo in response}