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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('fullname', 255);
            $table->string('cmnd_cccd', 20);
            $table->string('img_cmnd_cccd_truoc', 255);
            $table->string('img_cmnd_cccd_sau', 255);
            $table->string('district', 100);
            $table->string('ward', 100);
            $table->string('phone', 15);
            $table->string('password', 255);
            $table->unsignedBigInteger('role_id');
            $table->foreign('role_id')->references('id')->on('roles');
            $table->string('img_signature', 255);
            $table->smallInteger('gender')->default(1);
            $table->string('job', 255);
            $table->string('workplace', 255);
            $table->string('email', 255);
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
