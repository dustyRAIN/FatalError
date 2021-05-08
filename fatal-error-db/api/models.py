from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(50))
    lastName = db.Column(db.String(50))
    email = db.Column(db.String(50))
    mobile = db.Column(db.String(50))
    deleted = db.Column(db.Boolean, default=False)

    def __init__(self, firstName, lastName, email, mobile, deleted):
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.mobile = mobile
        self.deleted = deleted