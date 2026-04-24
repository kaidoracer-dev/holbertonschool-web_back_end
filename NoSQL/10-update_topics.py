#!/usr/bin/env python3

"""
Modulo contains function update_topics
"""


def update_topics(mongo_collection, name, topics):
    """
    Updates topics of a school.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
