export const swaggerDocument =
    {
        "swagger": "2.0",
        "info": {
          "description": "Não sei o que escrever aqui, então toma esse coração ❤(não é para você Sandra) \n Meu Linkedin: https://www.linkedin.com/in/yuri-fernandes-a7b316245 (Me arruma emprego)",
          "version": "0.1",
          "title": "GradeEstudos"
        },
        "paths": {
          "/grade/Yuri/React": {
            "get": {
              "produces": [
                "text/html"
              ],
              "parameters": [],
              "responses": {
                "200": {
                  "description": "Definition generated from Swagger Inspector",
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "/grade/melhorNota/Yuri/React": {
            "get": {
              "produces": [
                "application/json"
              ],
              "parameters": [],
              "responses": {
                "200": {
                  "description": "Definition generated from Swagger Inspector",
                  "schema": {
                    "$ref": "#/definitions/Model3"
                  }
                }
              }
            }
          },
          "/grade/1": {
            "put": {
              "consumes": [
                "application/json"
              ],
              "produces": [
                "application/json"
              ],
              "parameters": [
                {
                  "in": "body",
                  "name": "body",
                  "required": false,
                  "schema": {
                    "$ref": "#/definitions/Model1"
                  },
                  "x-examples": {
                    "application/json": "{\r\n\t\"student\": \"Yuri\",\r\n\t\"subject\": \"01 - JavaScript\",\r\n\t\"type\": \"teste4\",\r\n\t\"value\": 234,\r\n\t\"timestamp\": \"teste\"\r\n}"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Definition generated from Swagger Inspector",
                  "schema": {
                    "$ref": "#/definitions/Model4"
                  }
                }
              }
            }
          },
          "/grade/52": {
            "delete": {
              "consumes": [
                "application/json"
              ],
              "parameters": [
                {
                  "in": "body",
                  "name": "body",
                  "required": false,
                  "schema": {
                    "$ref": "#/definitions/Model0"
                  },
                  "x-examples": {
                    "application/json": "{\r\n\t\"student\": \"Yuri\",\r\n\t\"subject\": \"01 - JavaScript\",\r\n\t\"type\": \"teste4\",\r\n\t\"value\": 234,\r\n\t\"timestamp\": \"teste\"\r\n}"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Definition generated from Swagger Inspector",
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "/grade/": {
            "post": {
              "consumes": [
                "application/json"
              ],
              "produces": [
                "application/json"
              ],
              "parameters": [
                {
                  "in": "body",
                  "name": "body",
                  "required": false,
                  "schema": {
                    "$ref": "#/definitions/Model2"
                  },
                  "x-examples": {
                    "application/json": "{\r\n\t\"student\": \"Yuri\",\r\n\t\"subject\": \"01 - JavaScript\",\r\n\t\"type\": \"teste4\",\r\n\t\"value\": 234,\r\n\t\"timestamp\": \"teste\"\r\n}"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Definition generated from Swagger Inspector",
                  "schema": {
                    "$ref": "#/definitions/Model7"
                  }
                }
              }
            }
          },
          "/grade": {
            "get": {
              "produces": [
                "application/json"
              ],
              "parameters": [],
              "responses": {
                "200": {
                  "description": "Definition generated from Swagger Inspector"
                }
              }
            }
          },
          "/grade/{param0}": {
            "get": {
              "produces": [
                "application/json"
              ],
              "parameters": [
                {
                  "name": "param0",
                  "in": "path",
                  "description": "Example values form path are: '1' and 'Yuri'",
                  "required": true,
                  "type": "string"
                }
              ],
              "responses": {
                "200": {
                  "description": "Definition generated from Swagger Inspector",
                  "schema": {
                    "$ref": "#/definitions/Model5"
                  }
                }
              }
            }
          }
        },
        "definitions": {
          "Model0": {
            "properties": {
              "student": {
                "type": "string"
              },
              "subject": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "value": {
                "type": "integer",
                "format": "int32"
              },
              "timestamp": {
                "type": "string"
              }
            }
          },
          "Model1": {
            "properties": {
              "student": {
                "type": "string"
              },
              "subject": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "value": {
                "type": "integer",
                "format": "int32"
              },
              "timestamp": {
                "type": "string"
              }
            }
          },
          "Model2": {
            "properties": {
              "student": {
                "type": "string"
              },
              "subject": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "value": {
                "type": "integer",
                "format": "int32"
              },
              "timestamp": {
                "type": "string"
              }
            }
          },
          "Array": {
            "properties": {
              "id": {
                "type": "integer",
                "format": "int32"
              },
              "student": {
                "type": "string"
              },
              "subject": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "value": {
                "type": "integer",
                "format": "int32"
              },
              "timestamp": {
                "type": "string"
              }
            }
          },
          "Model3": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Array"
            }
          },
          "Model4": {
            "properties": {
              "student": {
                "type": "string"
              },
              "subject": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "value": {
                "type": "integer",
                "format": "int32"
              },
              "timestamp": {
                "type": "string"
              }
            }
          },
          "Model5": {
            "properties": {
              "id": {
                "type": "integer",
                "format": "int32"
              },
              "student": {
                "type": "string"
              },
              "subject": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "value": {
                "type": "integer",
                "format": "int32"
              },
              "timestamp": {
                "type": "string"
              }
            }
          },
          "Model6_Array": {
            "properties": {
              "id": {
                "type": "integer",
                "format": "int32"
              },
              "student": {
                "type": "string"
              },
              "subject": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "value": {
                "type": "integer",
                "format": "int32"
              },
              "timestamp": {
                "type": "string"
              }
            }
          },
          "Model7": {
            "properties": {
              "id": {
                "type": "integer",
                "format": "int32"
              },
              "student": {
                "type": "string"
              },
              "subject": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "value": {
                "type": "integer",
                "format": "int32"
              },
              "timestamp": {
                "type": "string"
              }
            }
          }
        }
};