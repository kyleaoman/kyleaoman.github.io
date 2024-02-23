import requests

user_agent = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0)"
    " Gecko/20100101 Firefox/54.0"
}
url = (
    "https://calendar.google.com/calendar/"
    "embed?src=kyleaoman%40gmail.com&ctz=Europe%2FLondon"
)

response = requests.get(url, headers=user_agent)

html_source = response.text
lines = html_source.split("\n")
for line in lines:
    if "serverTime" in line:
        server_time = line.split("=")[1].split(";")[0]
    if "calendar-web.embed" in line and "stylesheet" not in line:
        src = line.split("src=")[1].split('"')[1]

mod_file = "_includes/head.html"
with open(mod_file, "r") as f:
    lines = f.readlines()
for i, line in enumerate(lines):
    if "serverTime" in line:
        lines[i] = f"      gcal$perf$serverTime={server_time};\n"
    if "calendar-web.embed" in line and "stylesheet" not in line:
        lines[i] = (
            '    <script type="text/javascript" '
            f'src="https://calendar.google.com{src}">'
            "</script>\n"
        )
with open(mod_file, "w") as f:
    f.writelines(lines)
