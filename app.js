const lupaIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg==";
const homeIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB90lEQVR4nO2Yv0scQRTHP16iBIIBFQXBBAsRQZGzsbS7gEIKwSKF4BXiX6CY0tLW0srSSuz8hWBhIbH0ByGEWIh2/kiCoqtnVhZHGB57Mvv7DucDA8fuvO97b/e9mZ0Di8WSFAPAIfBb/a4qJoA7wFXjHpimCngHLGiBy7EIvKdC6QD2RMA7aujX9tTcimIIuBCBzgN1wFtgVtz7CwxTAdSo2n7QgrsFxn3mjgLX2rz/KrEcGfEBWBZP9hjof8EmDxwJmxWggZTpAn6IQLaAFgPbJmBd2P4CekmJr8CVKIU5VeumvAFmROndAMUE4/Ztxn/ASATNL8ClT/PXEjPNwKZw9BPojkG7EzgQ2ttAKzHRB5wIB0tAfVwOeNJaEj5OlO9I5MX6XgK+qeUzbmqUdknzdx6lub063NfEzoACyVNQvvSdO1RPFDWRPzHVuyk9ard+9j8WRkRfqydJnynN/2oYgVNN4BPp0y4aOjD6JpPF90pO8+/FEhh9ScsKN0oMNoEYcO0b4JX1wBCwCzg+B3pH3RtMOIbQxp/V2cA1GF6iJqSawK5h8N74XokJONp8vzNuozj4JxFDJGOT+UlolsUm4IN9A0GwJeSDLaEg2BLKuoScAJ8GruEum4RmWTZCOltLWbMsH9VfK6ZPzVGO2lLWtFgsVDGPMK2osGh7JHQAAAAASUVORK5CYII="
const userIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD10lEQVR4nO2bV2hUQRSGP2OioEFBwWBDbCjGCEasLyoWFB8FC6JGDRpjBbGAClZE7KCiiOVFULArQjRRLHmRvGhAg0RN1DdxLbF3Bs7CMsxm7+7c7N6J94PzkmTPnLk7c+Y/Z24gJCQkJCQkXRQAG4HbQA3wSewJcB0oBbrRDBkGVAJ/PdhP4CjQmWZAFrAH+ONx8rH2AZiCw2QDp1OYeKz9km3hJFsME1Ir4TwwHegJtBUbACwHHsZ5CM6thFESeOxE6oDhHrbMIuCb9tn3ruWEm9oEXiWZ3UcbHsIRHGGQYRmPScHPYsPp0BUHWK8FXp6iH7UdHmm+nEiIFVrQRRa+Vmi+ruEAdVrQfSx8DdB8KcUYeD5rQbex8JWr+WrgP3sA7Qzq0Lkt0NfCV76LW6BcC3qeha+Vmq+rOHgMVqTopyVQrflS2sBJITQ2BT+lBiHUBUcos5TCYwxS+DAOMdJQDNUDIzws+1LD5N8BeTjG5jjl8AVghgiktnLW50vCq45TDk/mP26IlOAwLYBdwO8UJq+W/SSaCUOB+x4n/lMSnnN73gv5ohMqRNU1iD2WSq/EpaMuJCTEmvZizZZsuRYrBvYCN4BaIGIQSBH5XZn8bbGcHsqHU/QBlgGXpYHx19LUncAlYCnQm4DSDpgj9wGp3AMmY1XSLO1AAOgKHDK0wbzaB4tVosY8mCndkAfsB756CPSNFEDqrnAaMFC+PdX3j5IlPyuQv9kKXJTPJvKvYtgHdErX5ItEp8cLSG2BO8BqYLA20WRRny0E1gB3E2wvlURn04S0Ao41EoBqhm4CejVhDL2lzNYbr7GmXq7I8XvglsDZOAPWS1JqTfrIkaRbGyemi34fn7sNg3wH1srKyBRq7HXAD0N8O/0apNBQzz8TkRIUhklMejNF5SBrTmmOnwf0ZQV1HL7QYj3hh+OXmtOJBJfJhsRsRZa2/P8EXJvnaEflL2nLWdGgPdUeBJeeBqVpTaXmVLW0gsoGLVYlnqxZozn9GLATIMoQQ12h1Kg1HYC3muN3Uq/byFw/RdpCgzyP+FkxzmlE/m4D+pGZS1g19us4sdlcyxvZnqAqewqcBOYD/eWb8TO7F0rb/LhokcZi2UETsdhjCRyVyjXS71ctrlXAAmAqME72bNTUm6XjRWPMFol9ADgHPEhizC/AEtJw1Bw3HI+ZtI/yJmlaj+hcYC5wS66z0j1p9W1fkf6EumXOKLnABKnVbxm6vn5YRP7TZJtcmmZ80onoKFXaTBEo+yVJXpC7waoYuycNVWVnpMWlcsYseXG6e8LRQkJCQkJCSJZ/UhGZU5NnfNoAAAAASUVORK5CYII=";

document.getElementById("lupaElement").src = lupaIcon;
document.getElementById("homeElement").src = homeIcon;
document.getElementById("userElement").src = userIcon;

