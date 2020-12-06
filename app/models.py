from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
#


albumPhotos = db.Table('albumPhotos',
  db.Column('id', db.Integer, db.ForeignKey('photos.id')),
  db.Column('id', db.Integer, db.ForeignKey('albums.id'))
)

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  encrypted_password = db.Column(db.LargeBinary, nullable=False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  avatar = db.Column(db.String(255), nullable = True)
  album_id = db.Column(db.Integer, nullable = True)
  photos = db.relationship('Photo', back_populates="user")
  albums = db.relationship('Album', back_populates="user")

  def to_dict(self):
    # created_post_ids = [
    #   post.id for post in self.created_posts
    # ]
    # created_thread_ids = [thread.id for thread in self.created_threads]
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
    }


class Photo(db.Model):
  __tablename__ = 'photos'

  id = db.Column(db.Integer, primary_key = True)
  content = db.Column(db.String(255), nullable = False)
  name = db.Column(db.String(255), nullable= True)
  description = db.Column(db.String(255), nullable= True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  album_id = db.Column(db.Integer, db.ForeignKey("albums.id"))

  user = db.relationship("User",  back_populates="photos")
  def to_dict(self):

    return {
      "id": self.id,
      "content": self.content,
      "name": self.name,
      "description": self.description,
      "user": self.user_id,
      "album": self.album_id
    }

class Album(db.Model):
  __tablename__ = 'albums'

  id = db.Column(db.Integer, primary_key = True)
  content = db.Column(db.String(255), nullable = False)
  name = db.Column(db.String(255), nullable= True)
  description = db.Column(db.String(255), nullable= True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  photo_id = db.Column(db.Integer, db.ForeignKey("photos.id"))

  
  user = db.relationship("User",  back_populates="albums")
  def to_dict(self):

    return {
      "id": self.id,
      "content": self.content,
      "name": self.name,
      "description": self.description,
      "user": self.user_id,
    }

