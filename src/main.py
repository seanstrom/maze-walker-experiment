from ffi.js import Graph, Html, Hyper, console, document

def view():
    return Html.text("Hello")

def init():
    return 0

def main():
    graph = Graph()
    console.log(graph)
    element = document.getElementById("root")
    Hyper.app(node=element, view=view, init=init)

