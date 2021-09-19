terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region     = "ap-south-1"
  access_key = var.access_key
  secret_key = var.secret_key
}

resource "aws_dynamodb_table" "student-stable" {
  name           = "Student-Table"
  billing_mode   = "PROVISIONED"
  read_capacity  = 20
  write_capacity = 20
  hash_key       = "StudentId"
  range_key      = "Name"

  attribute {
    name = "StudentId"
    type = "N"
  }

  attribute {
    name = "Name"
    type = "S"
  }

  ttl {
    attribute_name = "TimeToExist"
    enabled        = false
  }

  global_secondary_index {
    name               = "UserTitleIndex"
    hash_key           = "StudentId"
    range_key          = "Name"
    write_capacity     = 10
    read_capacity      = 10
    projection_type    = "INCLUDE"
    non_key_attributes = ["StudentId"]
  }

  tags = {
    Name        = "dynamodb-table"
    Environment = "Test"
  }
}