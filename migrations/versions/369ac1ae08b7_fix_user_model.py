"""fix user model

Revision ID: 369ac1ae08b7
Revises: e34bf4e47297
Create Date: 2020-12-05 23:56:49.234633

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '369ac1ae08b7'
down_revision = 'e34bf4e47297'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('albums_photo_id_fkey', 'albums', type_='foreignkey')
    op.drop_column('albums', 'photo_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('albums', sa.Column('photo_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('albums_photo_id_fkey', 'albums', 'photos', ['photo_id'], ['id'])
    # ### end Alembic commands ###
