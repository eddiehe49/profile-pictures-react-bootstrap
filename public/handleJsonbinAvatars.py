import requests


def updateBin():
    url = "https://api.jsonbin.io/v3/b/624173ee0618276743817ab6/"
    headers = {
        "Content-Type": "application/json",
        "X-Master-Key": "$2b$10$Dr3C03m96HY3V014.oTOf.kh/veUr7PF2tLr7FK/B9v03pstYPCSO",
    }
    # data = {"sample": "Hello World"}
    data = {
        "avatars": [
            {
                "id": 0,
                "src": "notion-avatar-1634477551270.png",
                "words": "notion-avatar \n This is a notion style avatar.",
                "likes": 2,
            },
            {"id": 1, "src": "peep.png", "words": "peep.png", "likes": 3},
            {
                "id": 2,
                "src": "vue-color-avatar.png",
                "words": "vue-color-avatar",
                "likes": 4,
            },
        ]
    }
    req = requests.put(url, json=data, headers=headers)
    print(req.text)


def readBin():
    url = "https://api.jsonbin.io/v3/b/624173ee0618276743817ab6/latest"
    headers = {
        "X-Master-Key": "$2b$10$Dr3C03m96HY3V014.oTOf.kh/veUr7PF2tLr7FK/B9v03pstYPCSO"
    }
    req = requests.get(url, json=None, headers=headers)
    print(req.text)


def deleteVersion():
    url = "https://api.jsonbin.io/v3/b/624173ee0618276743817ab6/versions"
    headers = {
        "X-Master-Key": "$2b$10$Dr3C03m96HY3V014.oTOf.kh/veUr7PF2tLr7FK/B9v03pstYPCSO",
        "X-Preserve-Latest": "true",
    }
    req = requests.delete(url, json=None, headers=headers)
    print(req.text)


if __name__ == "__main__":
    # updateBin()
    # readBin()
    deleteVersion()
