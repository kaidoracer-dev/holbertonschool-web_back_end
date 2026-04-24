#!/usr/bin/env python3

"""
Modulo contains function insert_school
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a document and returns its ID.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
