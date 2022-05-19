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
        Schema::create('pre_histories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('register_injection_id');
            $table->foreign('register_injection_id')->references('id')->on('register_injections');
            $table->string('symptom_1', 255);
            $table->string('name_1', 255);
            $table->smallInteger('status_1');
            $table->string('symptom_2', 255);
            $table->string('name_2', 255);
            $table->smallInteger('status_2');
            $table->string('symptom_3', 255);
            $table->string('name_3', 255);
            $table->smallInteger('status_3');
            $table->string('symptom_4', 255);
            $table->string('name_4', 255);
            $table->smallInteger('status_4');
            $table->string('symptom_5', 255);
            $table->string('name_5', 255);
            $table->smallInteger('status_5');
            $table->string('symptom_6', 255);
            $table->string('name_6', 255);
            $table->smallInteger('status_6');
            $table->string('symptom_7', 255);
            $table->string('name_7', 255);
            $table->smallInteger('status_7');
            $table->string('symptom_8', 255);
            $table->string('name_8', 255);
            $table->smallInteger('status_8');
            $table->string('symptom_9', 255);
            $table->string('name_9', 255);
            $table->smallInteger('status_9');
            $table->string('symptom_10', 255);
            $table->string('name_10', 255);
            $table->smallInteger('status_10');
            $table->string('symptom_11', 255);
            $table->string('name_11', 255);
            $table->smallInteger('status_11');
            $table->string('symptom_12', 255);
            $table->string('name_12', 255);
            $table->smallInteger('status_12');
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
        Schema::dropIfExists('pre_histories');
    }
};
