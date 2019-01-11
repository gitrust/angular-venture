import http.server
import socketserver
import os

PORT = 5000
wwwfolder = 'angular-venture'

web_dir = os.path.join(os.path.dirname(__file__), wwwfolder)
os.chdir(web_dir)

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)
print("Serving at port ", PORT)
httpd.serve_forever()