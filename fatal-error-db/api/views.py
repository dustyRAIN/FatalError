from flask import Blueprint, jsonify, request
from .models import User
from flask_cors import CORS
from . import db

main = Blueprint('main', __name__)
CORS(main)

@main.route('/api/users/', methods=['GET'])
def get_all_users():
    user_list = User.query.all()
    users = []

    for user in user_list:
        users.append({
            'id': user.id,
            'firstName': user.firstName,
            'lastName': user.lastName,
            'email': user.email,
            'mobile': user.mobile,
            'deleted': user.deleted
        })

    response = jsonify({'users': users})
    response.headers.add("Access-Control-Allow-Origin", "*")
    
    return response

@main.route('/api/users/', methods=['POST'])
def create_user():
    user_data = request.get_json()
    new_user = User(
            firstName=user_data['firstName'],
            lastName = user_data['lastName'],
            email = user_data['email'],
            mobile = user_data['mobile'],
            deleted = False
        )
    db.session.add(new_user)
    db.session.commit()

    response =  jsonify({
        "id": str(new_user.id),
        "firstName": str(new_user.firstName),
        "lastName": str(new_user.lastName),
        "email": str(new_user.email),
        "mobile": str(new_user.mobile),
        "deleted": new_user.deleted
    })
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


@main.route('/api/users/<id>', methods=['PUT'])
def edit_user(id):
    user_data = request.get_json()
    user = User.query.filter_by(id = id).first()
    user = User(
            firstName=user_data['firstName'],
            lastName = user_data['lastName'],
            email = user_data['email'],
            mobile = user_data['mobile'],
            deleted = user_data['deleted']
        )
    db.session.commit()
    return 'ok', 200

@main.route('/api/users/<id>', methods=['DELETE'])
def toggle_delete_user(id):
    user = User.query.filter_by(id = id).first()
    user.deleted = not user.deleted
    db.session.commit()
    return 'ok', 200

@main.route('/api/users/delete-all/')
def delete_all_users():
    num = db.session.query(User).delete()
    db.session.commit()
    return 'success', 200
