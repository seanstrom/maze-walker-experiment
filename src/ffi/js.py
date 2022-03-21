from typing import Any

# __pragma__ ('skip')
def require(lib):
    return lib

class document:
    getElementById = None
    addEventListener = None

def __new__(*args) -> Any:
    pass
# __pragma__ ('noskip')


# Graphology FFI

Graphology = require("graphology")

# __pragma__("kwargs")
def Graph(*args, **kwargs):
    return __new__(Graphology(*args, **kwargs))
# __pragma__("nokwargs")


# Hyperapp FFI

Hyper = require('hyperapp')
Html = require('@hyperapp/html')


# Globals FFI

window = require('global/window')
console = require('global/console')
document = require('global/document')


# JSON

Json = window.JSON


# Maze Generator

Maze = require('maze-generation')


# Heap

HeapJS = require('heap-js')

# __pragma__("kwargs")
def Heap(*args, **kwargs):
    return __new__(HeapJS.Heap(*args, **kwargs))
# __pragma__("nokwargs")


# Polyfill asdict for dataclasses

def asdict(data):
    props = dict()
    propNames = window.Object['keys'](data)

    for propName in propNames:
        if "__" in propName:
            continue
        else:
            props[propName] = data[propName]

    return props
