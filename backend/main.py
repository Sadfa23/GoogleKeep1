from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
cors = CORS(app, origins='*', supports_credentials=True)


#Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#Init db
db = SQLAlchemy(app)
#Init marshmallow
ma = Marshmallow(app)

#Note model/class
class Note(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    note = db.Column(db.String, unique=True)
    
    def __init__(self, note):
        self.note=note
#Note schema
class NoteSchema(ma.Schema):
     class Meta:
         fields = ('id', 'note')
         
#Init Schema
note_schema = NoteSchema()
notes_schema = NoteSchema(many=True)

# Create a note
@app.route('/create', methods = ['POST'])
def add_note():
    note = request.json['note']
    
    new_note = Note(note)
    
    db.session.add(new_note)
    db.session.commit()
    return note_schema.jsonify(new_note)

# get all notes
@app.route('/allnotes', methods=['GET'])
def get_notes():
    all_notes = Note.query.all()
    result = notes_schema.dump(all_notes)
    return jsonify(result)
 
 
 # get single note
@app.route('/allnotes/<id>', methods=['GET'])
def get_note(id):
    note = Note.query.get(id)
    return note_schema.jsonify(note)

# update a note
@app.route('/update/<id>', methods = ['PUT'])
def update_note(id):
    noteToUpdate = Note.query.get(id)
    newNote = request.json['note']
    
    noteToUpdate.note = newNote
    
    
    db.session.commit()
    return note_schema.jsonify(noteToUpdate)

# Delete note
@app.route('/delete/<id>', methods=['DELETE'])
def delete_note(id):
    noteToDelete = Note.query.get(id)
    db.session.delete(noteToDelete)
    db.session.commit()
    return note_schema.jsonify(noteToDelete)

#test route frontend
@app.route('/api/users',methods=['GET'])

# Run Server
def users():
    return jsonify(
        {
            "users":['Ray','Okwiri','Juma']
        }
    )
    
    
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)