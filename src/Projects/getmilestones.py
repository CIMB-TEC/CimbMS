import requests
from bs4 import BeautifulSoup

vgm_url = 'https://cimb.com.mx/proyectos/admas.html'
html_text = requests.get(vgm_url).text
soup = BeautifulSoup(html_text, 'html.parser')
projects = soup.findall(class_="proyectos-wrapper")

milestones = []

for period in projects:
    period_milestones = {
        "date": (lambda data: soup.find(value=data.id).string)(period)
    }

# [
#     {
#         date: "Enero 2019",
#         images: ["./../img/proyectos/ADMAS/ene19/c2c-slider-1.png"],
#         title: "Simulacion C2X",
#         desc1: "Implementar un entorno de simulación de comunicación V2V aplicado a un escenario real en la Ciudad de México, integrando herramientas de software de comunicación inalámbrica a través de dos tecnologías diferentes, para poder obtener la",
#         poster: "../img/proyectos/ADMAS/ene19/c2c-poster.pdf",
#         desc2: '<ul><li>Modelación en SUMO y simulación en 3D en “Webots”de una ruta vehicular desde campus CCM a campus CSF</li><li>Tener un software capaz de simular comunicaciones vehiculares tanto con el protocolo 802.11p como con tecnología celular sobre vehículos en SUMO y Omnet++ y contar con una versión exportable de los simuladores de tráfico y red en una máquina virtual.</li><li>Generar comparativas entre protocolos con respecto a capa 1 y 2 del modelo de OSI sobre el escenario planteado.</li></ul>',
#         extra: '[" < iframe src = "https://www.youtube.com/embed/3J5w7qXFCf4" allow = "autoplay; encrypted-media" allowfullscreen = "" frameborder = "0" > < /iframe>", "<iframe src=" https://www.youtube.com/embed/eKGfnuoXSJs" allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0"></iframe>", "<iframe src=" https://www.youtube.com/embed/qUlvr9aazQU" allow=" encrypted-media" allowfullscreen="" frameborder="0"></iframe>"]',
#     }
# ]
