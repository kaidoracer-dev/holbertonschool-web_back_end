#!/usr/bin/env python3

"""
Modulo contains function print_stats
"""

def print_stats():
    """
    Prints Nginx logs stats.
    """
    from pymongo import MongoClient

    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    print(f"{collection.count_documents({})} logs")
    print("Methods:")
    for m in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        print(f"\tmethod {m}: {collection.count_documents({'method': m})}")

    print(collection.count_documents({"method": "GET", "path": "/status"}), "status check")
