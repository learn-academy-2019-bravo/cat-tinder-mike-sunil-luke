class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats
    end
    
    def create
        cat = Cat.create(cat_params)
        if cat.valid?
            render json: cat
        else
            render json: cat.errors, status: :unprocessable_entity
        end
    end
    
    def show
        cat = Cat.find(params["id"])
        render json: cat
    end
    
    def update
        # @cat = cat.find(params[:id]) #probably would be current_cat for you
        # @cat.update_attributes(cat_params)
        # render :show
        cat = Cat.find(params["id"])
        cat.update(cat_params)
    end
    
    
    def cat_params
        params.require(:cat).permit(:name, :age, :enjoys, :avatar)
    end
end
