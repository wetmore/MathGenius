MathGenius
==========

Annotate to educate.

[Demo here](http://mathgenius.meteor.com)


## Setting up

#### virtualenv

Install the latest version of _virtualenv_. You can get it from here: https://pypi.python.org/pypi/virtualenv

Clone the repo (or pull if haven't pulled after the django app was introduced.) We assume you've cloned it to a folder named `$MATHGENIUS_HOME`. Navigate to `$MATHGENIUS_HOME` and create a new virtual environment `genius_env`.

	$> cd /path/to/$MATHGENIUS_HOME
	$> virtualenv genius_env

Activate the environment:

	$> source genius_env/bin/activate

You should see `(genius_env)` prepended to your prompt, indicating the environment has been activated. To test that you properly isolated your python environment, try `pip freeze`. It should only show 2 or 3 python packages that are installed installed by default, but at this point it should *not* show _django_.

Just for reference: You can type `deactivate` from anywhere to deactivate the environment.

#### Install dependencies

Navigate to $MATHGENIUS_HOME and install the required packages from requirements.txt

	$> pip install -r requirements.txt

#### Set up database and initial migration

Navigate to the mathgenius directory where `manage.py` resides, and run the `syncdb` command:

	$> python manage.py syncdb

It will prompt you to set up a root username and password. Comply.

We use `south` to handle databse migrations so that models can be easily changed. We need to set up the initial migration first:

	$> python manage.py schemamigration --initial main_app
	$> python manage.py migrate

#### The development server

The development server can be run with

	$> python manage.py runserver_plus
