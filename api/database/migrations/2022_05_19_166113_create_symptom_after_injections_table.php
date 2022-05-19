<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('symptom_after_injections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_after_injection_id');
            $table->foreign('user_after_injection_id')->references('id')->on('user_after_injections');
            $table->string('symptom_1', 255)->nullable();
            $table->string('name_1', 255)->nullable();
            $table->smallInteger('status_1')->nullable();
            $table->string('symptom_2', 255)->nullable();
            $table->string('name_2', 255)->nullable();
            $table->smallInteger('status_2')->nullable();
            $table->string('symptom_3', 255)->nullable();
            $table->string('name_3', 255)->nullable();
            $table->smallInteger('status_3')->nullable();
            $table->string('symptom_4', 255)->nullable();
            $table->string('name_4', 255)->nullable();
            $table->smallInteger('status_4')->nullable();
            $table->string('symptom_5', 255)->nullable();
            $table->string('name_5', 255)->nullable();
            $table->smallInteger('status_5')->nullable();
            $table->string('symptom_6', 255)->nullable();
            $table->string('name_6', 255)->nullable();
            $table->smallInteger('status_6')->nullable();
            $table->string('symptom_7', 255)->nullable();
            $table->string('name_7', 255)->nullable();
            $table->smallInteger('status_7')->nullable();
            $table->string('symptom_8', 255)->nullable();
            $table->string('name_8', 255)->nullable();
            $table->smallInteger('status_8')->nullable();
            $table->string('symptom_9', 255)->nullable();
            $table->string('name_9', 255)->nullable();
            $table->smallInteger('status_9')->nullable();
            $table->string('symptom_10', 255)->nullable();
            $table->string('name_10', 255)->nullable();
            $table->smallInteger('status_10')->nullable();
            $table->string('symptom_11', 255)->nullable();
            $table->string('name_11', 255)->nullable();
            $table->smallInteger('status_11')->nullable();
            $table->string('symptom_12', 255)->nullable();
            $table->string('name_12', 255)->nullable();
            $table->smallInteger('status_12')->nullable();
            $table->string('symptom_13', 255)->nullable();
            $table->string('name_13', 255)->nullable();
            $table->smallInteger('status_13')->nullable();
            $table->string('symptom_14', 255)->nullable();
            $table->string('name_14', 255)->nullable();
            $table->smallInteger('status_14')->nullable();
            $table->string('symptom_15', 255)->nullable();
            $table->string('name_15', 255)->nullable();
            $table->smallInteger('status_15')->nullable();
            $table->string('symptom_16', 255)->nullable();
            $table->string('name_16', 255)->nullable();
            $table->smallInteger('status_16')->nullable();
            $table->string('symptom_17', 255)->nullable();
            $table->string('name_17', 255)->nullable();
            $table->smallInteger('status_17')->nullable();
            $table->string('symptom_18', 255)->nullable();
            $table->string('name_18', 255)->nullable();
            $table->smallInteger('status_18')->nullable();
            $table->string('symptom_19', 255)->nullable();
            $table->string('name_19', 255)->nullable();
            $table->smallInteger('status_19')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('symptom_after_injections');
    }
};
