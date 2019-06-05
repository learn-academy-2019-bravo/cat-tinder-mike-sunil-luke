require 'rails_helper'

RSpec.describe CatsController, type: :controller do
    
    describe "Cats API" do
      it "gets a list of Cats" do
        # Create a new cat in the Test Database (not the same one as development)
        Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')
    
        # Make a request to the API
        get :index
    
        # Convert the response into a Ruby Hash
        json = JSON.parse(response.body)
    
        # Assure that we got a successful response
        expect(response).to be_success
    
        # Assure that we got one result back as expected
        expect(json.length).to eq 1
      end
    end
    
    it "creates a cat" do
        cat_params = {
            cat: {
                name: 'Buster',
                age: 4,
                enjoys: 'Meow Mix, and plenty of sunshine.'
            }
        }
        post :create, params: cat_params
        expect(response).to be_success
        new_cat = Cat.first
        expect(new_cat.name).to eq('Buster')
    end
    
    it "doesn't create a cat without a name/age/enjoys" do
        cat_params = {
            cat: {
                age: 4,
                enjoys: 'meow mix'
            },
            cat2: {
                name: 'tony',
                enjoys: 'meow mix'
            },
            cat3: {
                name: 'berry',
                age: 4
            },
            cat4: {
                
            },
        }
        
        post :create, params: cat_params
        
        expect(response.status).to eq 422
        
        json = JSON.parse(response.body)
        expect(json['name']).to include "can't be blank"
    end
    
end
