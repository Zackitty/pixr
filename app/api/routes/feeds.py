from flask import Blueprint, jsonify, request
from app.models import db, Photo, Album, albumPhotos
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import bcrypt
import re

bp = Blueprint('feeds', __name__, '')

@bp.route('')
def index():
  response = Photo.query.all()
  return {photo.id: photo.to_dict() for photo in response}

@bp.route('/<int:id>')
def user_photos(id):
   response = Photo.query.filter(Photo.user_id == id)
   return {photo.id: photo.to_dict() for photo in response}

@bp.route('/albums/<album_name>')
def albums_photos(album_name):
    response = Photo.query.filter(Album.photos.any(Album.name == album_name))
    return {photo.id: photo.to_dict() for photo in response}