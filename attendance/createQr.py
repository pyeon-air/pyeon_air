from fileinput import filename
import os
import qrcode
from PIL import Image


def create_qrcode(company, qr_text, file_name, qr_size=10):
    current_path = os.getcwd()
    os.makedirs("qrimg", exist_ok=True)
    new_current_path = os.path.join(current_path, 'qrimg')

    qr = qrcode.QRCode(
    version=1,
    box_size=qr_size,
    border=4
    )
    qr.add_data(qr_text)
    qr.make(fit=True)

    img_path = os.path.join(new_current_path, company)
    os.makedirs(img_path, exist_ok=True)

    img = qr.make_image(fill_color='black', back_color='white')
    img.save(os.path.join(img_path, file_name))

    return img_path


