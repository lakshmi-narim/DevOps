 
from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for flashing messages

# Route for the registration form
@app.route('/')
def registration_form():
    return render_template('registration.html')

# Route to handle form submission
@app.route('/register', methods=['POST'])
def register():
    # Retrieve form data
    first_name = request.form['first']
    last_name = request.form['last']
    email = request.form['email']
    mobile = request.form['mobile']
    password = request.form['password']
    repassword = request.form['repassword']
    gender = request.form['gender']

    # Simple validation
    if password != repassword:
        flash("Passwords do not match!", "error")
        return redirect(url_for('registration_form'))

    # Additional logic (e.g., saving to a database) can go here

    # Render success page
    return render_template('success.html', first_name=first_name)

# Success page
@app.route('/success')
def success():
    return "Registration successful!"

if __name__ == '__main__':
    app.run(debug=True)
