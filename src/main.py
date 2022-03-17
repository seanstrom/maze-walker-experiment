from dataclasses import dataclass
from ffi.js import Graph, Html, Hyper, console, document


# Data Structures

@dataclass
class Model:
    counter: int = 0

@dataclass
class Increment:
    pass

@dataclass
class Decrement:
    pass


# Initial State

def init() -> Model:
    return Model()


# Update

def update(model, msg):
    if type(msg) is Increment:
        return Model(counter=model.counter + 1)
    if type(msg) is Decrement:
        return Model(counter=model.counter - 1)
    else:
        return model

def action(model, msg):
    return lambda event: update(model, msg)


# View

def view(model: Model):
    return Html.div({}, [
        Html.text(f"Counter: {model.counter}"),

        Html.button(dict(
            onclick=action(model, Increment())
        ), [
            Html.text('+')
        ]),

        Html.button(dict(
            onclick=action(model, Decrement())
    ), [
            Html.text('-')
        ]),
    ])

# Main

def main():
    element = document.getElementById("root")
    Hyper.app(node=element, view=view, init=init)

