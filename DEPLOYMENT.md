### Before connecting to the EC2 instance
If you are using an SSH client on a Mac or Linux computer to connect to the 
Linux instance, use the following command to set the permissions of your private
key file so that you can read it.
```
chmod 400 administrator-key-pair-uswest1.pem
```

### Connect to the EC2 instance
If you're using Windows, you can install PuTTY.

Specify the .pem file to your SSH client with the -i option and the path to the private key.
```
ssh -i /path/my-key-pair.pem ec2-##-###-###-###.us-west-1.compute.amazonaws.com
```
```
aws ec2 get-console-output --instance-id i-06e80a90654376569
```
