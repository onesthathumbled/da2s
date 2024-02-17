class CaseInformationsController < ApplicationController
    protect_from_forgery with: :null_session
    before_action :set_case_information, only: [:show, :update, :destroy]

    def index
        @case_informations = CaseInformation.order(:case_id).limit(100)
        render json: @case_informations
    end

    def create
        @case_information = CaseInformation.new(case_information_params)

        if @case_information.save
            render json: @case_information
        else
            render json: @case_information.errors
        end
    end

    def update
        if @case_information.update(case_information_params)
            render json: @case_information
        else
            render json: @case_information.errors
        end
    end

    def destroy
        @case_information.destroy
    end

    def show
        render json: @case_information
    end

    private

    def set_case_information
        @case_information = CaseInformation.find(params[:id])
    end

    def case_information_params
        params.permit(
            :case_id, 
            :age, 
            :age_group, 
            :sex, 
            :data_announced, 
            :data_recorded, 
            :date_of_death, 
            :status, 
            :date_announced_as_removed, 
            :province,
            :muni_city,
            :health_status,
            :home_quarantined,
            :date_of_onset_of_symptoms,
            :pregnant,
            :region
            )
    end
end
