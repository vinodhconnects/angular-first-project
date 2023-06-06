### Angular Directives

    The custom html elements and custom attributes that we create in angular
    are called angular Directives

    there are three kinds of Directives in Angular

* Component Directives
* Structural Directives
* Attribute Directives

#### Component Directives

  Every component that we create is a custom html element

  EVery component that you create is a component directive

#### Structural Directives

   Structural Directives generate html template, hides/unhides the template

   Basically Structural directives manipulate the layout[html]

   There are few inbuilt stuructural directies

   ```
      Example: ngFor, ngIf, ngSwitch
   ```

   We can also create our own custom structural directives

   Note: while using structural directives we must prefix them with asterisk(*)

   ### Attribute Directives

     Attribute Directives changes the behaviour of target elements

      Behaviour change ? -- manipulate css attributes like size,color
                            manipulate data  
                            listening and handling events

    Attribute directives are further categorized into three kinds

* input directive
* output directive
* input and output directive

#### input Directive
   
     input directive is meant to receive a value from the right side of the
     expression and change the behaviour of target element

     and usually the right side value would be a variable defined in the class

     some inbuilt input directives incude

     ```
              style, ngStyle,ngClass, RouterLink, formControlName.....

     ```

     We have to enclose the input directives within []

     <h1 [sample]="data"></h1>

     in the above case, h1 is the target element
     sample is the input directive
     data is the value, data is a variable that would be present in the component class

     if the same above thing defined in the following way

     <h1 sample="data"></h1> OR
     <h1 [sample]="'data'"></h1>

     in this case, data would be considered a string , that is is directly
     taken as value


#### Output Directives

   output directives listens to the appropriate Event associated with it on the target element

   ````
     click, keyup,keydown, change, mouseover,mouseaway.....
    
````

  in angular , events on the target elements must be handled by using output
  directives

  output directives must be enclosed  within ()

  in the right side usually we will give a funciton call and if necassary
  with a parameter

  example

  ```
    <button (click)="doThis()"></button>

    in the above case whenever you click button doThis will be called
    click is the output directive

 ```


#### input output directives

This directive is bidirectional

it listens to the changes and at the same time receives value
from the right side

usually this directives are used in form elements

and the only known popular input output directive is ngModel

it must be enclosed with [()]

```
   <input type="text" [(ngModel)]="fname">

   in the above case if fname ="John", the text box will be filled with John

   and suppose if you type "peter" in the text box the value fname will be changed
   to peter
   ```