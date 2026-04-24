#!/usr/bin/env python3

"""
Modulo contains function schools_by_topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns schools with a given topic.
    """
    return list(mongo_collection.find({"topics": topic}))
