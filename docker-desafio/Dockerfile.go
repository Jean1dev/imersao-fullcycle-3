FROM golang:1.20 AS build

WORKDIR /app

COPY hello.go ./

RUN go mod init gitub.com/aprendagolang/docker
RUN go build -o /executavel

FROM gcr.io/distroless/base-debian10

WORKDIR /

COPY --from=build /executavel /executavel

ENTRYPOINT [ "/executavel" ]

