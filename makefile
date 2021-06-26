PROJECT_NAME = medprep-web
PROJECT_TAG = syncit:web

run:
	docker run \
	-it \
	--rm \
	-dp 3000:3000 \
	--name $(PROJECT_NAME) \
	-v `pwd`:/app/ \
	$(PROJECT_TAG)
stop:
	docker stop $(PROJECT_NAME) || true
install:
	docker build -t $(PROJECT_TAG) .
install-prod:
	docker build -t $(PROJECT_TAG) -f Dockerfile.prod .
attach:
	docker attach $(PROJECT_NAME)
clean:
	docker rm $(PROJECT_NAME) || true
restart:
	make stop && make run
	