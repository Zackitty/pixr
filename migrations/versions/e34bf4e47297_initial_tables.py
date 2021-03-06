"""initial tables

Revision ID: e34bf4e47297
Revises: 
Create Date: 2020-12-02 16:06:39.058234

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e34bf4e47297'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('albumPhotos',
    sa.Column('id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['albums.id'], )
    )
    op.add_column('albums', sa.Column('photo_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'albums', 'photos', ['photo_id'], ['id'])
    op.add_column('photos', sa.Column('album_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'photos', 'albums', ['album_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'photos', type_='foreignkey')
    op.drop_column('photos', 'album_id')
    op.drop_constraint(None, 'albums', type_='foreignkey')
    op.drop_column('albums', 'photo_id')
    op.drop_table('albumPhotos')
    # ### end Alembic commands ###
