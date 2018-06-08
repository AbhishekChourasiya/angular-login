# AngularLogin

This project demonstrates how to add restricted access for selected resources using JWT Authentication Mechanism. We have a login component which calls our REST Api `localhost:8080/token/generate-token` together with username and password provided in login form.

Our REST APi which is running on Spring Boot at `localhost:8080` validates the user by its credentials and generate a JWT Token and return it back to our application. Now when we are requesting access to our secured resources, we must set Authenticcation token in request header. e.g.


`Authorization : Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmhpc2hlazEiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImlhdCI6MTUyODM2Nzg0NCwiZXhwIjoxNTI4MzY4NDQ0fQ.HzBKzjfQiTfFKlTaay9FCwMIA0ZhiIYj5RsaKsodWWA`

Whenever a valid token is found within the header, our REST Api will process the request and give back JSON response.


# Note : 
# This Project is the UI of a SpringBoot project runing on localhost:8080


