 from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Mock data
activities = [
    {"type": "Movie", "host": "Alice", "details": "Movie plan at my home", "time": "Saturday 6 PM", "people": 5},
    {"type": "Sports", "host": "Bob", "details": "Sports activity at the club", "time": "Sunday 8 AM", "people": 10},
    {"type": "Ride", "host": "Charlie", "details": "Bike ride for 2 days", "time": "Weekend", "people": 6}
]

# Routes
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/explore")
def explore():
    return render_template("explore.html", activities=activities)

@app.route("/host", methods=["GET", "POST"])
def host():
    if request.method == "POST":
        new_activity = {
            "type": request.form["type"],
            "host": request.form["host"],
            "details": request.form["details"],
            "time": request.form["time"],
            "people": request.form["people"]
        }
        activities.append(new_activity)
        return redirect(url_for("explore"))
    return render_template("host.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/past-activities")
def past_activities():
    return render_template("past_activities.html", activities=activities)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
