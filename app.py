from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# In-memory activity storage
activities = [
    {
        "type": "Movie",
        "host": "Alice",
        "details": "Movie night at Alice's home",
        "time": "Saturday 6 PM",
        "people": 5
    },
    {
        "type": "Sports",
        "host": "Bob",
        "details": "Basketball game at the club",
        "time": "Sunday 8 AM",
        "people": 10
    },
    {
        "type": "Ride",
        "host": "Charlie",
        "details": "Weekend bike ride",
        "time": "Saturday 7 AM",
        "people": 6
    },
]


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/activities", methods=["GET"])
def get_activities():
    return jsonify(activities)


@app.route("/add-activity", methods=["POST"])
def add_activity():
    new_activity = request.json
    if not new_activity or not isinstance(new_activity, dict):
        return jsonify({"message": "Invalid activity data"}), 400

    # Append the validated activity
    activities.append(new_activity)
    return jsonify({"message": "Activity added successfully!"}), 201


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
